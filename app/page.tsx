import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        ShanJianQing
      </h1>
      <p className="mb-4">
        photographer & programmer & designer
        <br />
        who is trying to creating more beatiful things
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
