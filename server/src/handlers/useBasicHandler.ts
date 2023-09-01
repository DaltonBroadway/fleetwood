import { Id, StateAction } from "../shared/types";

type CreateHandler<T> = (parent_id: Id, payload: T) => void;

type UpdateHandler<T> = (id: Id, payload: T) => void;

type DeleteHandler<T> = (id: Id, payload: T) => void;

type BadAction<T> = (parent_id: Id, id: Id, action: string, payload: T) => void;

export const useBasicHandler = <T>(
  createHandler: CreateHandler<T>,
  updateHandler: UpdateHandler<T>,
  deleteHandler: DeleteHandler<T>,
  badAction: BadAction<T>
) => {
  return (parent_id: Id, { id, action, payload }: StateAction<T>) => {
    switch (action) {
      case "create":
        return createHandler(parent_id, payload);
      case "update":
        return updateHandler(id, payload);
      case "delete":
        return deleteHandler(id, payload);
      default:
        return badAction(parent_id, id, action, payload);
    }
  };
};
