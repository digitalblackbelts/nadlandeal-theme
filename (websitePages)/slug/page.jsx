import { useRouter } from "next/router"

const Page = () => {
  const router = useRouter()
  const { slug } = router.query
  const decodedSlug = decodeURIComponent(slug)

  return (
    <div>
      <h1>Page: {decodedSlug}</h1>
    </div>
  )
}

export default Page
