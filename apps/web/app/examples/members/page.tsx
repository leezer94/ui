import { ManageMember, HireMember } from '@/app/examples/members/components';
import { OurCulture } from '@/app/examples/members/components/features';

export default function LandingPage() {
  return (
    <div className='flex flex-nowrap gap-4 p-5'>
      <div className='flex w-4/12 flex-col gap-y-6'>
        <ManageMember />
        <OurCulture />
      </div>
      <HireMember />
    </div>
  );
}
