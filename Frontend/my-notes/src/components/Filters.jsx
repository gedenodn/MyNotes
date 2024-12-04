import { Input, Select } from "@chakra-ui/react"

export default function Filters() {
    return(
        <div className="flex flex-col hap-5">
        <Input placeholder="Search" />
         <Select>
          <option>New firstly</option>
          <option>Old firstly</option>

         </Select>
        </div>
    )
}