import { Link } from 'expo-router'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const tasks = [
  { id: '1', title: 'Task 1: Buy groceries' },
  { id: '2', title: 'Task 2: Walk the dog' },
  { id: '3', title: 'Task 3: Complete project' },
  { id: '4', title: 'Task 4: Call mom' },
]

const TaskItem = ({ title,id }: { title: string, id:string }) => (
  <View style={styles.taskItem}>
    <Link href={`/tasks/${id}`} asChild>
      <Text style={styles.taskText}>{title}</Text>
    </Link>
  </View>
)

const Index = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem title={item.title} id={item.id} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  taskItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
})

export default Index