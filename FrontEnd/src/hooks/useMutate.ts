import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { Action } from "redux";

const useMutate = <TData, TError, TVariables>(
  action: (variables: TVariables) => Promise<TData>,
  queryKey: string,
  disAction?: (data: TData) => Action
) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const mutation = useMutation<TData, TError, TVariables>(action, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(queryKey);
      if (disAction) {
        dispatch(disAction(data));
      }
    },
  });
  return mutation;
};

export default useMutate;
