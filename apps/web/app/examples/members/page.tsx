import Image from 'next/image';
import { ManageMember, HireMember } from '@/app/examples/members/components';
import { OurCulture } from '@/app/examples/members/components/features';
import type { Metadata } from 'next/types';
import MembersExample from '../../../public/examples/members-example.png';

export const metadata: Metadata = {
  title: 'Members | Leezer-UI',
  description: 'Example Members page using the components.',
};

export default function MembersPage() {
  return (
    <>
      <div className='block h-full w-full md:hidden'>
        <Image src={MembersExample} alt='members-example' />
      </div>
      <div className='hidden flex-nowrap gap-4 p-5 md:flex'>
        <div className='flex w-4/12 flex-col gap-y-6'>
          <ManageMember />
          <OurCulture />
        </div>
        <HireMember />
      </div>
    </>
  );
}
