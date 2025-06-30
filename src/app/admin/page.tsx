'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  TrendingUp, 
  Eye,
  AlertCircle
} from 'lucide-react'

interface Contact {
  id: string
  name: string
  email: string
  message: string
  service?: string
  company?: string
  status?: string
  createdAt: string
}

interface Application {
  id: string
  firstName: string
  lastName: string
  email: string
  jobTitle: string
  applicant?: string
  experience?: string
  status?: string
  createdAt: string
}

interface DashboardData {
  recentContacts: Contact[]
  recentApplications: Application[]
  subscriberCount: number
  testimonialCount: number
  currentStats: {
    projectsDelivered: number
    enterpriseClients: number
    clientSatisfaction: string
    countriesServed: number
  }
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/dashboard')
      if (response.ok) {
        const result = await response.json()
        setData(result.dashboard)
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'NEW': return 'bg-blue-100 text-blue-800'
      case 'REVIEWED': return 'bg-green-100 text-green-800'
      case 'IN_PROGRESS': return 'bg-yellow-100 text-yellow-800'
      case 'COMPLETED': return 'bg-gray-100 text-gray-800'
      case 'UNDER_REVIEW': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Failed to load dashboard data</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">MedGAN Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your website data and submissions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Newsletter Subscribers</p>
                <p className="text-2xl font-bold text-gray-900">{data.subscriberCount.toLocaleString()}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <MessageSquare className="w-8 h-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Projects Delivered</p>
                <p className="text-2xl font-bold text-gray-900">{data.currentStats.projectsDelivered}+</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <Briefcase className="w-8 h-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Enterprise Clients</p>
                <p className="text-2xl font-bold text-gray-900">{data.currentStats.enterpriseClients}+</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Client Satisfaction</p>
                <p className="text-2xl font-bold text-gray-900">{data.currentStats.clientSatisfaction}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Contact Submissions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow"
          >
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900">Recent Contact Submissions</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {data.recentContacts.map((contact) => (
                  <div key={contact.id} className="border-l-4 border-blue-500 pl-4 py-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-600">{contact.company}</p>
                        <p className="text-sm text-gray-500">{contact.service}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                        {contact.status || 'New'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Job Applications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow"
          >
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900">Recent Job Applications</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {data.recentApplications.map((application) => (
                  <div key={application.id} className="border-l-4 border-green-500 pl-4 py-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{application.applicant}</h3>
                        <p className="text-sm text-gray-600">{application.jobTitle}</p>
                        <p className="text-sm text-gray-500">{application.experience}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(application.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                        {application.status?.replace('_', ' ') || 'New'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white rounded-lg shadow p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Eye className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">View All Contacts</span>
            </button>
            <button className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Briefcase className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Manage Applications</span>
            </button>
            <button className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700">Update Stats</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
