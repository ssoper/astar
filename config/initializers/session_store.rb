# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_astar_session',
  :secret      => '08e49370e8aa142363d5bc83e45385910374ba3ee5cee49e588d2d3695b0bfb32fa622613aa58b36dc256a261fa0074ae0e7844089270bdc99042d4420b5924d'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
