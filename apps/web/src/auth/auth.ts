import { cookies } from 'next/headers'
export async function isAuthenticated() {
  return await !!(await cookies()).get('token')?.value
}
