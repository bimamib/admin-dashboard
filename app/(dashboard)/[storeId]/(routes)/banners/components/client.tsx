"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";

export const BannerClient = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Banner (0)" description="Atur Banner Untuk Tokomu" />
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
    </>
  );
};
