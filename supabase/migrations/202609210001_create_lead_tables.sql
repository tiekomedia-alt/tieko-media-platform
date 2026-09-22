create extension if not exists pgcrypto;

create table if not exists public.review_requests (
  id uuid primary key default gen_random_uuid(),
  service text not null,
  goal text not null,
  timeline text not null,
  business_stage text not null,
  full_name text not null,
  organisation text not null,
  email text not null,
  phone text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  email_status text not null default 'pending' check (email_status in ('pending', 'sent', 'failed')),
  resend_email_id text,
  email_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  organisation text not null,
  email text not null,
  phone text not null,
  service text not null,
  preferred_date date not null,
  preferred_time text not null,
  notes text not null,
  status text not null default 'new' check (status in ('new', 'confirmed', 'completed', 'cancelled')),
  email_status text not null default 'pending' check (email_status in ('pending', 'sent', 'failed')),
  resend_email_id text,
  email_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists review_requests_created_at_idx on public.review_requests (created_at desc);
create index if not exists review_requests_status_idx on public.review_requests (status);
create index if not exists booking_requests_created_at_idx on public.booking_requests (created_at desc);
create index if not exists booking_requests_status_idx on public.booking_requests (status);

alter table public.review_requests enable row level security;
alter table public.booking_requests enable row level security;

revoke all on table public.review_requests from anon, authenticated;
revoke all on table public.booking_requests from anon, authenticated;

grant all on table public.review_requests to service_role;
grant all on table public.booking_requests to service_role;
