import ListBlog from "@/components/listBlog";

export default async function Page({ params, searchParams }) {
  // Await the params before using its properties
  const { postid } = await params; // Await the params object to get postid
  const { lan, typesource } = await searchParams; // You can directly access searchParams as it's synchronous

  // console.log("Params:", await params); // Log params for debugging
  // console.log("Search Params:", await searchParams); // Log searchParams for debugging

  // Fetching blog posts data server-side
  let blogData = [];
  try {
    const response = await fetch(
      "https://cpapi.exploitresource.com/station/content_station/detail/v1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          languageCode: lan, // Use 'lan' query parameter
          source: typesource, // Use 'typesource' query parameter
          taskId: postid, // Use dynamic postid
        }),
        cache: "force-cache", // Adjust caching here as needed
      }
    );
    const data = await response.json();
    blogData = Array.isArray(data.result) ? data.result : [data.result]; // Ensure blogData is an array
    // console.log("Fetched blog data:", blogData);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }

  return (
    <div className="max-w-[640px] m-auto min-h-screen bg-white">
      <div>
        {blogData.map((post, index) => (
          <div key={index}>
            <h2 className="bg-red-700 min-h-12 flex items-center justify-center text-white font-bold text-xl px-4 py-1">
              {post.title}
            </h2>
            <img
              className="w-full h-[250px] px-4 pt-4 rounded-md"
              src={post.imgUrl}
              alt={post.title}
            />
            <p className="p-4">{post.content.slice(0, 1000)}</p>
          </div>
        ))}
      </div>
      <ListBlog />
    </div>
  );
}
