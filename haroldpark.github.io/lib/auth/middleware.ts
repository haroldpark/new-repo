import { z } from "zod";
// TODO: Configure database queries
// import { TeamDataWithMembers, User } from '@/lib/db/schema';
// import { getTeamForUser, getUser } from '@/lib/db/queries';
import { redirect } from "next/navigation";

// Mock types for development
type User = any;
type TeamDataWithMembers = any;

export type ActionState = {
  error?: string;
  success?: string;
  [key: string]: any; // This allows for additional properties
};

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData
) => Promise<T>;

export function validatedAction<S extends z.ZodType<any, any>, T>(
  schema: S,
  action: ValidatedActionFunction<S, T>
) {
  return async (prevState: ActionState, formData: FormData) => {
    const result = schema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }

    return action(result.data, formData);
  };
}

type ValidatedActionWithUserFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData,
  user: User
) => Promise<T>;

export function validatedActionWithUser<S extends z.ZodType<any, any>, T>(
  schema: S,
  action: ValidatedActionWithUserFunction<S, T>
) {
  return async (prevState: ActionState, formData: FormData) => {
    // TODO: Configure user authentication
    // const user = await getUser();
    // if (!user) {
    //   throw new Error('User is not authenticated');
    // }

    // Mock user for development
    const user = null;

    const result = schema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }

    return action(result.data, formData, user);
  };
}

type ActionWithTeamFunction<T> = (
  formData: FormData,
  team: TeamDataWithMembers
) => Promise<T>;

export function withTeam<T>(action: ActionWithTeamFunction<T>) {
  return async (formData: FormData): Promise<T> => {
    // TODO: Configure team authentication
    // const user = await getUser();
    // if (!user) {
    //   redirect('/sign-in');
    // }

    // const team = await getTeamForUser();
    // if (!team) {
    //   throw new Error('Team not found');
    // }

    // Mock team for development
    const team = null;

    return action(formData, team);
  };
}
