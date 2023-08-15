import { ManageMember, ManageTax } from '@/app/examples/landing/components';

export default function LandingPage() {
  return (
    <div className='hidden flex-nowrap p-5'>
      <ManageMember />
      <ManageTax />
    </div>
  );
}
