import { fetcher } from "@/action/fetcher";
import { useInvalidateQuery } from "@/config/htpp/useInvalidateQuerie";
import { useMutation } from "@tanstack/react-query";
const useCustomers = () => {
  const { invalidate } = useInvalidateQuery();

  // edit data customers
  const { mutate: edit, isPending: EditPending } = useMutation({
    mutationKey: ["edit-customers"],
    mutationFn: async ({ data, id }: { data: FormData; id: number }) => {
      const response = await fetcher({
        method: "post",
        contentType: "formdata",
        endpoint: `profile_data/${id}`,
        body: data,
      });
      if (response) {
        return response.data;
      }
    },
    onSuccess: () => {
      invalidate("CustomersData");
    },
  });
  return { edit, EditPending };
};

export default useCustomers;
