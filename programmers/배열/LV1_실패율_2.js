function solution(N, stages) {
    const ans = [];
    
    for (let i=1; i <= N; i++) {
        // 도달한 플레이어 수
        let reach = stages.filter((x) => x >= i).length;
        // 현 스테이지를 클리어하지 못한 플레이어 수
        let curr = stages.filter((x) => x === i).length;
        // 실패율
        ans.push([i, curr / reach]);
    }
    // 실패율이 높은 순 정렬
    ans.sort((a,b) => b[1] - a[1]);
    return ans.map((item) => item[0]);
}
