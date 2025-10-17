"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Copy, Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

interface CodeViewerDialogProps {
  templateId: string;
  title: string;
  description?: string;
  trigger?: React.ReactNode;
}

export function CodeViewerDialog({
  templateId,
  title,
  description,
  trigger,
}: CodeViewerDialogProps) {
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession();

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  const fetchCode = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/templates/${templateId}/code`);
      if (res.status === 401) {
        setCode(null);
        return; // Not logged in
      }
      if (res.status === 402) {
        setCode(null);
        return; // Not Pro
      }
      if (!res.ok) {
        throw new Error("Failed to load code");
      }
      const data = (await res.json()) as { id: string; code: string };
      setCode(data.code);
    } catch (e) {
      toast.error("Unable to load code. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [templateId]);

  // When dialog opens, attempt loading if user is logged in
  const onOpenChange = async (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setCode(null);
      if (session?.user) {
        await fetchCode();
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Get Code</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {/* States: not logged in -> Sign in, not Pro -> Upgrade, loading -> spinner, success -> code */}
        {!session?.user ? (
          <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
            <Lock className="h-6 w-6 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Sign in to view and copy this code.
            </p>
            <div className="flex gap-2">
              <Button asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center py-10 gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading code...
          </div>
        ) : code ? (
          <div className="flex-1 overflow-auto rounded-lg border bg-muted/50 relative">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopy}
              className="absolute top-2 right-2 z-10"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </>
              )}
            </Button>
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="font-mono">{code}</code>
            </pre>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
            <Lock className="h-6 w-6 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Upgrade to Pro to unlock and copy this code.
            </p>
            <div className="flex gap-2">
              <Button
                onClick={async () => await authClient.checkout({ slug: "pro" })}
              >
                Upgrade to Pro
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">See what’s included</Link>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
