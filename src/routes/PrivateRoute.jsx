import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import useAxiosSecure from '@/hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const PrivateRoute = ({ children, userRole }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()

  const {data, isLoading} = useQuery({
    queryKey: ["user", user?.displayName],
    queryFn: async () => {
      const {data} = await axiosSecure(`/user/${user?.email}`)
      return data
    }
  })
  console.log(data?.role);
  const isValid = data?.role === userRole

  if (loading && isLoading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={{ from: location }} replace='true' />
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default PrivateRoute
