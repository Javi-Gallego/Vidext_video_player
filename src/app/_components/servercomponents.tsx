import { api } from "@/trpc/server"

export default async function ServerComponent({ children }: { children: React.ReactNode }) {
  const hello = await api.post.hello({ text: "from tRPC" })
  
  return (
    <div>
      {/*<p>{hello.greeting}</p>*/}
      {children}
    </div>
  )
}