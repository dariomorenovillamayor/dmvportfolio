import { person } from "@/resources";

export async function GET() {
  return Response.json({
    name: person.name,
    firstName: person.firstName,
    lastName: person.lastName,
    role: person.role,
    avatar: person.avatar
  });
} 