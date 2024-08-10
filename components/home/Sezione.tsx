import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Array contenente tutte le lettere dell'alfabeto
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function Sezione({onSelect}: {onSelect:(value: string)=>void}) {

  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Seleziona una lettera" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sezioni</SelectLabel>
          {ALPHABET.map(letter => (
            <SelectItem key={letter} value={letter}>
              {letter}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
