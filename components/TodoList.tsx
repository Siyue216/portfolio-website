'use client';

import React, { useState, useEffect } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

interface Todo {
  id: number;
  text: string;
  category: 'Learning' | 'Projects' | 'Ideas';
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Todo['category']>('Projects');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    } else {
      // Default todos
      setTodos([
        { id: 1, text: 'Build AI chatbot integration', category: 'Projects', completed: false },
        { id: 2, text: 'Learn Three.js for 3D animations', category: 'Learning', completed: false },
        { id: 3, text: 'Create portfolio template marketplace', category: 'Ideas', completed: false },
      ]);
    }
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('portfolio-todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          category: selectedCategory,
          completed: false
        }
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const categoryColors = {
    Learning: 'bg-blue-500',
    Projects: 'bg-green-500',
    Ideas: 'bg-purple-500'
  };

  return (
    <section className="section-padding bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Current <span className="gradient-text">Focus</span>
        </h2>
        <p className="text-center text-[var(--muted)] mb-12 text-lg">
          Projects and goals I'm working on
        </p>

        <Card>
          {/* Add New Todo */}
          <div className="mb-6">
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)]"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Todo['category'])}
                className="px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)]"
              >
                <option value="Projects">Projects</option>
                <option value="Learning">Learning</option>
                <option value="Ideas">Ideas</option>
              </select>
              <Button onClick={addTodo} variant="primary">
                Add
              </Button>
            </div>
          </div>

          {/* Filter */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${filter === 'all' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--background)] text-[var(--foreground)]'}`}
            >
              All ({todos.length})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg transition-colors ${filter === 'active' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--background)] text-[var(--foreground)]'}`}
            >
              Active ({todos.filter(t => !t.completed).length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg transition-colors ${filter === 'completed' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--background)] text-[var(--foreground)]'}`}
            >
              Completed ({todos.filter(t => t.completed).length})
            </button>
          </div>

          {/* Todo List */}
          <div className="space-y-3">
            {filteredTodos.length === 0 ? (
              <p className="text-center text-[var(--muted)] py-8">No tasks to show</p>
            ) : (
              filteredTodos.map(todo => (
                <div
                  key={todo.id}
                  className="flex items-center gap-3 p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span className={`flex-1 ${todo.completed ? 'line-through text-[var(--muted)]' : 'text-[var(--foreground)]'}`}>
                    {todo.text}
                  </span>
                  <span className={`px-3 py-1 text-xs text-white rounded-full ${categoryColors[todo.category]}`}>
                    {todo.category}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
