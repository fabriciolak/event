import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase'

const serviceUrl = "https://sbkdrfhdjnzyncryivfg.supabase.co"
const serviceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNia2RyZmhkam56eW5jcnlpdmZnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2OTY2MDA4NiwiZXhwIjoxOTg1MjM2MDg2fQ.9eeAzOWPDAuWkQ5AAEhv9Y-XwxCE9U9KSUCcaItvdtk"

export const supabase = createClient(serviceUrl, serviceKey)