import { toast } from "react-toastify";

export const handleReport = (id) => {
  fetch(`https://resale-used-products-server.vercel.app/reported-items/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ report: true }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        toast.success("Product Reported To Admin");
      }
    });
};
