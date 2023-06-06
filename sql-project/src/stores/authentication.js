import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";

const supabase = createClient(
  "<INSERT PROJECT URL>",
  "<INSERT PROJECT ANON API KEY>"
);

const App = () => <Auth supabaseClient={supabase} />;

import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

const supabase = createClient(
  '<INSERT PROJECT URL>',
  '<INSERT PROJECT ANON API KEY>'
)

const App = () => (
  <Auth
    supabaseClient={supabase}
    {/* Apply predefined theme */}
    appearance={{ theme: ThemeSupa }}
  />
)

const loggedInUserId = 'd0714948'
let { data, error } = await supabase.from('users').select('user_id, name')

// console.log(data)
// Still => { id: 'd0714948', name: 'Jane' }
