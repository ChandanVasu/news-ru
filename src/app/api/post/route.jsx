// app/api/blogs/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pageIndex = searchParams.get("pageIndex") || 1;
  const pageSize = 5; // Set your page size here

  try {
    const response = await fetch(
      "https://cpapi.exploitresource.com/station/content_station/rec/v1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          languageCode: "ru",
          pageIndex: pageIndex,
          pageSize: pageSize,
          domainTag: "64305d92ef8e434ebab283ae6747745a",
        }),
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (data.status === 0 && data.result) {
      return new Response(JSON.stringify(data.result), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), {
        status: 500,
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
