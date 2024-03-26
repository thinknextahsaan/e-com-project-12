import React from 'react'
import { FaCar } from "react-icons/fa6";

const ServiceCard = ({title,desc,icon}) => {
  return (
   <div>
<div className="w-[250px] p-5">
<div className="mb-4">
{icon}
</div>
<h3 className="text-[18px] mb-3">{title}</h3>
<p>{desc}</p>
</div>
</div>
  )
}

export default ServiceCard
