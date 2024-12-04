import { Button, Input, Textarea } from '@chakra-ui/react'


export default function CreateNoteForm() {
  return (
      <form>
        <h3>Create note</h3>
        <Input type="text" placeholder="Title" />
        <Textarea placeholder="Description" />
        <Button colorScheme="teal">Create</Button>
      </form>
  )
}