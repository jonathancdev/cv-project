<Editable
          text={description}
          placeholder="Write a task name"
          childRef={inputRef}
          type="textarea"
          // type="input"
        >

          <textarea
            ref={inputRef}
            name="description"
            placeholder={description}
            rows="5"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />

          {/* <input
            type="text"
            name="task"
            placeholder="Write a task name"
            value={task}
            onChange={e => setTask(e.target.value)}
            /> */}


          
        </Editable>