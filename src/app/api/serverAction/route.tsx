export async function POST(req:any,res:any) {
        // Log the message to the server console
        console.log("This is server action printed on server console");

        return new Response("success", {
            status: 200
        })
  }