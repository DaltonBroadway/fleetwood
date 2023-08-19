import { CreateMsg, UpdateMsg, DeleteMsg, MsgHandlerTuple } from "./types";

const handleCreateSection = (data: CreateMsg): void => {
  console.info(data);
};

const handleUpdateSection = (data: UpdateMsg): void => {
  console.info(data);
};

const handleDeleteSection = (data: DeleteMsg): void => {
  console.info(data);
};

export const handlers: MsgHandlerTuple[] = [
  ["create-section", handleCreateSection],
  ["delete-section", handleDeleteSection],
  ["update-section", handleUpdateSection],
];
