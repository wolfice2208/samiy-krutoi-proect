import  useFetch  from "./useFetch"
interface User { id: number; name: string; }

export default function UserProfile({ userId }: { userId: number }) {
  const { data: isLoading, error } = useFetch<User>(`/api/users/${userId}`);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return <div>Я хочу быть как </div>;
}