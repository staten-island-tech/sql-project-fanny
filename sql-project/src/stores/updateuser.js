const { user, error } = await supabase.auth.update({ email: "new@email.com" });
