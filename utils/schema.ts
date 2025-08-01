import { z } from 'zod'

const Relationship = z.object({
  targetId: z.string(),
  type: z.string(),
  description: z.string().optional()
})

const Character = z.object({
  name: z.string(),
  description: z.string().optional(),
  age: z.number().optional(),
  gender: z.enum(['Male', 'Female', 'Other', 'Unknown']).optional(),
  groups: z.array(z.string()).optional(), 
  occupation: z.string().optional(),
  employer: z.string().optional(), 
  relationships: z.array(Relationship).optional(),
  tags: z.array(z.string()).optional(),
  residence: z.string().optional() 
})

const Group = z.object({
  name: z.string(),
  type: z.string().optional(), 
  ideology: z.string().optional(),
  leader: z.string().optional(), 
  hierarchy: z.array(z.string()).optional(), 
  associatedLocations: z.array(z.string()).optional() 
})

const Location = z.object({
  name: z.string(),
  area: z.string().optional(),
  region: z.string().optional(),
  country: z.string().optional(),
  notes: z.string().optional(),
  connectedItems: z.array(z.string()).optional(), 
  residents: z.array(z.string()).optional() 
})

const Item = z.object({
  name: z.string(),
  type: z.string().optional(), 
  owner: z.string().optional(), 
  origin: z.string().optional(), 
  currentLocation: z.string().optional(), 
  history: z.array(z.string()).optional(), 
  tags: z.array(z.string()).optional() 
})

export const CodexSchema = z.object({
  characters: z.array(Character),
  groups: z.array(Group),
  locations: z.array(Location),
  items: z.array(Item)
})
