import { ManageMember, HireMember } from '@/app/examples/members/components';

export default function LandingPage() {
  return (
    <div className='flex flex-nowrap p-5'>
      <ManageMember />
      <HireMember />
    </div>
  );
}
