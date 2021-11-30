import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
    return (
        <div className={'card'}>
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}  onClick={() => onToggle(todo.id)} className={'text'}>
                {todo.text}
            </span>
            <span onClick={() => onRemove(todo.id)} className={'btn--remove'}>
                <i class="fas fa-trash" />
            </span>
        </div>
        
    );
};

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    };
    
    const onChange = e => onChangeInput(e.target.value);

    return (
        <div>
            <section className={'section'}>
                <div className={'summary'}>Todo list</div>
            </section>
            <div className={'border'}></div>
            
            <div>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>

            <form onSubmit={onSubmit} id={'submit--form'} autocomplete="off">
                <input value={input} className={'input--text'} onChange={onChange} autoFocus />
                <button type="submit" className={'btn--primary'}>Add</button>
            </form>
        </div>
    );
};

export default Todos;