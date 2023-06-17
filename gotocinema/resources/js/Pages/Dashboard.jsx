import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({auth}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
       header={<h2 className="font-semibold text-xl text-gray-800 leading-tight" style={{fontSize: "2rem"}}>Панель управления</h2>}
    >
      <Head title="Панель | идемВкино" />
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900" style={{fontSize: "1.5rem"}}>
                Привет {auth.user.name}! Вы успешно вошли!
              </div>
            </div>
          </div>
        </div>
    </AuthenticatedLayout>
  );
}
