import {
  ManageMember,
  HireMember,
  RecentActivity,
} from '@/app/examples/members/components';

export default function LandingPage() {
  return (
    <div className='flex flex-nowrap gap-4 p-5'>
      <div className='flex w-4/12 flex-col gap-y-6'>
        <ManageMember />
        <RecentActivity />
      </div>
      <HireMember />
    </div>
  );
}
