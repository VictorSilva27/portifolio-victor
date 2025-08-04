-- Supabase Schema for Portfolio Backend
-- Run this SQL in your Supabase SQL Editor

-- Create status_checks table
CREATE TABLE IF NOT EXISTS status_checks (
    id TEXT PRIMARY KEY,
    client_name TEXT NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_status_checks_created_at ON status_checks(created_at);
CREATE INDEX IF NOT EXISTS idx_status_checks_client_name ON status_checks(client_name);

-- Enable Row Level Security (RLS)
ALTER TABLE status_checks ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow all operations (adjust based on your security needs)
CREATE POLICY "Allow all operations on status_checks" ON status_checks
    FOR ALL USING (true);

-- Optional: Create a function to automatically set timestamp
CREATE OR REPLACE FUNCTION set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.created_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Optional: Create trigger to automatically update created_at
CREATE TRIGGER set_status_checks_timestamp
    BEFORE INSERT ON status_checks
    FOR EACH ROW
    EXECUTE FUNCTION set_timestamp();
