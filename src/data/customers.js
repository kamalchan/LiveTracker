import { Avatar } from "@mui/material";

export const customersColumns = [
  {
    accessorKey: "img", 
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar src={cell.getValue()} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
  {
    accessorKey: "customer_name", 
    header: "Customer Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address", 
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
];

export const customers = [
  {
    id: 1,
    customer_name: "customer1",
    email: "customer@example.com",
    address: "123 Main Street, New York, NY 10001",
    phone: "212-555-1212",
    img: "/images/avatars/avatar.png",
  },
  {
    id: 2,
    customer_name: "customer2",
    email: "customer@example.com",
    address: "456 Park Avenue, New York, NY 10022",
    phone: "212-555-2323",
    img: "/images/avatars/avatar.png",
  },
  {
    id: 3,
    customer_name: "customer3",
    email: "customer@example.com",
    address: "789 Broadway, New York, NY 10011",
    phone: "212-555-3434",
    img: "/images/avatars/avatar.png",
  },
  {
    id: 4,
    customer_name: "customer4",
    email: "customer@example.com",
    address: "321 5th Avenue, New York, NY 10016",
    phone: "212-555-4545",
    img: "/images/avatars/avatar.png",
  },
  {
    id: 5,
    customer_name: "customer5",
    email: "customer@example.com",
    address: "246 West 34th Street, New York, NY 10001",
    phone: "212-555-5656",
    img: "/images/avatars/avatar.png",
  },
  {
    id: 6,
    customer_name: "customer6",
    email: "customer@example.com",
    address: "159 East 38th Street, New York, NY 10016",
    phone: "212-555-6767",
    img: "/images/avatars/avatar.png",
  },
  {
    id: 7,
    customer_name: "customer7",
    email: "customer@example.com",
    address: "741 Lexington Avenue, New York, NY 10022",
    phone: "212-555-7878",
    img: "/images/avatars/avatar.png",
  },
  {
    id: 8,
    customer_name: "customer8",
    email: "customer@example.com",
    address: "423 3rd Avenue, New York, NY 10017",
    phone: "212-555-8989",
    img: "/images/avatars/avatar.png",
  },
  {
    id: 9,
    customer_name: "customer9",
    email: "customer@example.com",
    address: "254 East 28th Street, New York, NY 10016",
    phone: "212-555-9898",
    img: "/images/avatars/avatar.png",
  },
  {
    id: 10,
    customer_name: "customer10",
    email: "customer@example.com",
    address: "135 West 25th Street, New York, NY 10001",
    phone: "212-555-1212",
    img: "/images/avatars/avatar.png",
  },
];
