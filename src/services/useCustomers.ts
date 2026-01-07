import { fetcher } from "@/action/fetcher";
import { useMutation } from "@tanstack/react-query";
import { TypeEditDataUserForm } from "@/schema/EditDataUserSchema";
const useCustomers = () => {
  // edit data customers
  const { mutate: edit, isPending: EditPending } = useMutation({
    mutationKey: ["edit-customers"],
    mutationFn: async ({
      data,
      id,
    }: {
      data: TypeEditDataUserForm;
      id: number;
    }) => {
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
  });
  return { edit, EditPending };
};

export default useCustomers;
