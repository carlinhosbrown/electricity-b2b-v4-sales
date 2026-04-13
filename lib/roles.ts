import { Role } from "@prisma/client";
export const roleRank: Record<Role, number> = { CLIENT_VIEWER: 1, ANALYST: 2, BROKER_AGENT: 3, BROKER_MANAGER: 4, SUPERADMIN: 5 };
export function canAccess(userRole: Role, required: Role) { return roleRank[userRole] >= roleRank[required]; }
