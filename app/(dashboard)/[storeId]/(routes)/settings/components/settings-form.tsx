"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { Trash2 } from "lucide-react";

interface SettingsFormProps {
  initialData: Store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Atur Toko" />
        <Button variant="destructive" size="sm" onClick={() => {}}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
