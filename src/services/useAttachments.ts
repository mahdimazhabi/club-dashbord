import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import api from "@/config/htpp/axios";
import { ApiConfig } from "@/config/ApiConfig";
import { useInvalidateQuery } from "@/config/htpp/useInvalidateQuerie";
import { AttachmentsData } from "@/interface/interface";

export const useAttachments = () => {
  const { headersFormData, headers } = ApiConfig();
  const { invalidate } = useInvalidateQuery();

  const {
    data,
    refetch,
    isPending: attachmentsLoading,
  } = useQuery<AttachmentsData[]>({
    queryKey: ["lists"],
    queryFn: async () => {
      try {
        const response = await api.get(`/attachments`, {
          headers: headers,
        });
        if (response) {
          return response.data;
        }
      } catch {
        console.log("");
      }
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["attachments"],
    mutationFn: async (data: FormData) => {
      try {
        const response = await api.post(`/attachments`, data, {
          headers: headersFormData,
        });
        return response.data;
      } catch (error) {
        console.error("Upload error:", error);
        throw error;
      }
    },
    onSuccess: async () => {
      invalidate("lists");
    },
  });

  const { mutate: removeAttachment, isPending: removePending } = useMutation({
    mutationFn: async (id: number) => {
      const toastId = toast.loading("در حال حذف فایل");
      try {
        const response = await api.delete(`attachments/${id}`, {
          headers: headers,
        });
        toast.success("با موفقیت حذف شد", { id: toastId });
        return response.data;
      } catch (error) {
        toast.error("خطا در حذف فایل", { id: toastId });
        throw error;
      }
    },
    onSuccess: async () => {
      invalidate("lists");
    },
  });

  return {
    mutate,
    isPending,
    attachmentsLoading,
    removeAttachment,
    removePending,
    data,
    refetch,
  };
};
