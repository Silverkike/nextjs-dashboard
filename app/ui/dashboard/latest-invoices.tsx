import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="space-y-4">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={i === 0 ? 'flex items-center pb-4' : 'flex items-center'}
              >
                <div className="mr-4 rounded-full bg-gray-200 p-2">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {invoice.name}
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    {invoice.email}
                  </p>
                </div>
                <p className="ml-auto text-sm font-medium">
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="pt-4 text-sm">
          <Link href="/dashboard/invoices">
            View all
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
