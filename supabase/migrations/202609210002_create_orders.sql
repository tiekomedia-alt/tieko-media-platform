create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  offer_slug text not null,
  offer_name text not null,
  amount_subunit bigint not null check (amount_subunit > 0),
  currency text not null default 'NGN' check (char_length(currency) = 3),
  full_name text not null,
  organisation text not null,
  email text not null,
  phone text not null,
  project_goal text not null,
  status text not null default 'pending' check (status in ('pending', 'processing', 'paid', 'failed', 'cancelled', 'refunded')),
  payment_provider text not null default 'flutterwave',
  gateway_transaction_id text,
  payment_channel text,
  gateway_response text,
  fulfillment_status text not null default 'not_required' check (fulfillment_status in ('not_required', 'pending', 'sending', 'fulfilled', 'failed')),
  fulfillment_email_id text,
  fulfillment_error text,
  fulfilled_at timestamptz,
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists orders_created_at_idx on public.orders (created_at desc);
create index if not exists orders_status_idx on public.orders (status);
create index if not exists orders_email_idx on public.orders (email);

alter table public.orders enable row level security;

revoke all on table public.orders from anon, authenticated;
grant all on table public.orders to service_role;
