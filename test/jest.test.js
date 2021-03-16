test('Conhecendo o jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10)
    expect(number).toEqual(10)
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11)
});

test('Devo saber trabalhar com objetos', () =>{
    const obj = { name: 'Jose Eduardo', email: 'jose@email.com'}
    expect(obj).toHaveProperty('name')
    expect(obj).toHaveProperty('name', 'Jose Eduardo')
    expect(obj.name).toBe('Jose Eduardo');

    const obj2 = { name: 'Jose Eduardo', email: 'jose@email.com'}

    expect(obj).toEqual(obj2)
    expect(obj).toBe(obj)
})
