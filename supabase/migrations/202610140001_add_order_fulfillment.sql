alter table public.orders
  add column if not exists fulfillment_status text not null default 'not_required'
    check (fulfillment_status in ('not_required', 'pending', 'sending', 'fulfilled', 'failed')),
  add column if not exists fulfillment_email_id text,
  add column if not exists fulfillment_error text,
  add column if not exists fulfilled_at timestamptz;

create index if not exists orders_fulfillment_status_idx
  on public.orders (fulfillment_status)
  where fulfillment_status <> 'not_required';
