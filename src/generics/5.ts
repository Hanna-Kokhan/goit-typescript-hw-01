export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleDescriptionMap = Record<UserRole, string>;

const RoleDescription: RoleDescriptionMap = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
