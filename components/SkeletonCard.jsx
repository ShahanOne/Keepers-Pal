import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonCard() {
  return (
    <div className="py-4 bg-slate-200 sm:mx-4 my-8 rounded-lg px-4">
      <SkeletonTheme baseColor="#f8ffff" highlightColor="#EEEEEE">
        <Skeleton className="my-2" height={16} width={80} />
        <Skeleton className="my-4" height={16} width={60} />
        <Skeleton className="my-4" height={16} width={200} />
        <Skeleton className="my-4" height={16} width={40} />
        <div className="text-end mx-2">
          <Skeleton borderRadius={20} width={60} height={20} />
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default SkeletonCard;
